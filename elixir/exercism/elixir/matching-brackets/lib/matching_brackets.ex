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
  defp iterate_brackets(["{" | tail], rest), do: iterate_brackets(tail, ["{" | rest])
  defp iterate_brackets(["[" | tail], rest), do: iterate_brackets(tail, ["[" | rest])
  defp iterate_brackets(["(" | tail], rest), do: iterate_brackets(tail, ["(" | rest])
  defp iterate_brackets(["}" | tail], ["{" | rest]), do: iterate_brackets(tail, rest)
  defp iterate_brackets(["]" | tail], ["[" | rest]), do: iterate_brackets(tail, rest)
  defp iterate_brackets([")" | tail], ["(" | rest]), do: iterate_brackets(tail, rest)
  defp iterate_brackets([], _left_brackets), do: false
  defp iterate_brackets(_, _), do: false
end
