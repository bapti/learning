defmodule MatchingBrackets do
  @doc """
  Checks that all the brackets and braces in the string are matched correctly, and nested correctly
  """
  @spec check_brackets(String.t()) :: boolean
  def check_brackets(str) do
    String.replace(str, ~r/[^\[\]\{\}\(\)]/, "")
    |> String.graphemes()
    |> iterate_brackets([])
  end

  defp iterate_brackets([], []), do: true
  defp iterate_brackets([], _left_brackets), do: false
  defp iterate_brackets([head | tail], []), do: iterate_brackets(tail, [head])

  defp iterate_brackets([head | tail], [last | rest]) do
    cond do
      Regex.match?(~r/[\[\{\(]/, head) ->
        iterate_brackets(tail, [head, last | rest])

      Regex.match?(~r/[\]\}\)]/, head) and check_pair_match(last, head) ->
        iterate_brackets(tail, rest)

      true ->
        false
    end
  end

  defp check_pair_match("[", "]"), do: true
  defp check_pair_match("(", ")"), do: true
  defp check_pair_match("{", "}"), do: true
  defp check_pair_match(_, _), do: false
end
