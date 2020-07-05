defmodule WordCount do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t()) :: map
  def count(sentence) do
    cleaned = Regex.replace(~r/[^\p{L}\p{Nd}\-]+/u, sentence, " ")

    cleaned
    |> String.downcase()
    |> String.split(" ")
    |> Enum.filter(fn item -> item !== "" end)
    |> Enum.reduce(%{}, fn word, acc ->
      Map.merge(acc, %{word => 1}, fn _k, v1, v2 ->
        v1 + v2
      end)
    end)
  end
end
