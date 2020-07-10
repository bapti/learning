defmodule RomanNumerals do
  @numeral_list [
    {"M", 1000},
    {"CM", 900},
    {"D", 500},
    {"CD", 400},
    {"C", 100},
    {"XC", 90},
    {"L", 50},
    {"XL", 40},
    {"X", 10},
    {"IX", 9},
    {"V", 5},
    {"IV", 4},
    {"III", 3},
    {"II", 2},
    {"I", 1}
  ]

  @doc """
  Convert the number to a roman number.
  """
  @spec numeral(pos_integer) :: String.t()
  def numeral(number), do: to_numeral(number, "")

  defp to_numeral(0, str), do: str

  defp to_numeral(number, str) do
    {letter, value} = Enum.find(@numeral_list, fn {_, value} -> number >= value end)

    to_numeral(number - value, str <> letter)
  end
end
