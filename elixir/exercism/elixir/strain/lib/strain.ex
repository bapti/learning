defmodule Strain do
  @doc """
  Given a `list` of items and a function `fun`, return the list of items where
  `fun` returns true.

  Do not use `Enum.filter`.
  """
  @spec keep(list :: list(any), fun :: (any -> boolean)) :: list(any)
  def keep(list, fun) do
    keeper = fn item -> fun.(item) == false end
    reject_list(list, keeper)
  end

  @doc """
  Given a `list` of items and a function `fun`, return the list of items where
  `fun` returns false.

  Do not use `Enum.reject`.
  """
  @spec discard(list :: list(any), fun :: (any -> boolean)) :: list(any)
  def discard(list, fun) do
    reject_list(list, fun)
  end

  defp reject_list([head | tail], fun) do
    if fun.(head) do
      reject_list(tail, fun)
    else
      [head | reject_list(tail, fun)]
    end
  end

  defp reject_list([], _fun) do
    []
  end
end
