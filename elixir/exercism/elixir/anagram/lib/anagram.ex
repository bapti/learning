defmodule Anagram do
  defguard are_words_equivalent(word_a, word_b)
           when String.downcase(word_a) == String.downcase(word_b)

  @doc """
  Returns all candidates that are anagrams of, but not equal to, 'base'.
  """
  @spec match(String.t(), [String.t()]) :: [String.t()]
  def match(base, candidates), do: Enum.filter(candidates, &is_anagram?(base, &1))

  defp is_anagram?(word_a, word_b) do
    cond do
      byte_size(word_a) != byte_size(word_b) -> false
      String.downcase(word_a) == String.downcase(word_b) -> false
      true -> sorted_letters(word_a) == sorted_letters(word_b)
    end
  end

  defp sorted_letters(word), do: String.downcase(word) |> String.graphemes() |> Enum.sort()
end
