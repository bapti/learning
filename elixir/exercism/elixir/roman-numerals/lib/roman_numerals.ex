defmodule RomanNumerals do
  @doc """
  Convert the number to a roman number.
  """
  @spec numeral(pos_integer) :: String.t()
  def numeral(number) do
    Enum.reduce(
      String.graphemes(number),
      )
  end

  def match("I" <> number) do 1
end
