defmodule Anagram do
  @doc """
  Returns all candidates that are anagrams of, but not equal to, 'base'.
  """
  @spec match(String.t(), [String.t()]) :: [String.t()]
  def match(base, candidates) do
    candidates
    |> Enum.filter(fn candidate -> is_anagram?(base, candidate) end)
  end

  def is_anagram?(str1, str2) do
    sort_string(str1) == sort_string(str2) and
      String.downcase(str1) != String.downcase(str2)
  end

  defp sort_string(str) do
    str
    |> String.downcase()
    |> String.graphemes()
    |> Enum.sort()
    |> Enum.join()
  end
end
