defmodule RunLengthEncoder do
  @doc """
  Generates a string where consecutive elements are represented as a data value and count.
  "AABBBCCCC" => "2A3B4C"
  For this example, assume all input are strings, that are all uppercase letters.
  It should also be able to reconstruct the data into its original form.
  "2A3B4C" => "AABBBCCCC"
  """
  @spec encode(String.t()) :: String.t()
  def encode(string) do
    string
    |> String.graphemes()
    |> Enum.reduce(
      [],
      fn
        letter, [{x, count} | tail] when x == letter ->
          [{x, count + 1} | tail]

        letter, [{x, count} | tail] when x != letter ->
          [{letter, 1}, {x, count} | tail]

        letter, [] ->
          [{letter, 1}]
      end
    )
    |> Enum.reverse()
    |> Enum.map_join(fn
      {letter, count} when count == 1 -> letter
      {letter, count} -> "#{count}#{letter}"
    end)
  end

  @spec decode(String.t()) :: String.t()
  def decode(string) do
    {decoded, _} =
      string
      |> String.graphemes()
      |> Enum.reduce(
        {"", ""},
        fn letter, {acc, num} ->
          cond do
            Regex.match?(~r/[0-9]/, letter) ->
              {acc, num <> letter}

            Regex.match?(~r/[A-Za-z ]/, letter) ->
              cond do
                num == "" -> {acc <> letter, ""}
                true -> {acc <> String.duplicate(letter, String.to_integer(num)), ""}
              end
          end
        end
      )

    decoded
  end
end
