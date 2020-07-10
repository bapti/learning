defmodule Bob do
  def hey(input) do
    cond do
      Regex.match?(~r/(^$|^[ \n\r\t]+$)/, input) ->
        "Fine. Be that way!"

      Regex.match?(~r/(?=.*[\p{Lu}])(^[\p{Lu}0-9 ,'!%^*@#$(]+$)/u, input) ->
        "Whoa, chill out!"

      Regex.match?(~r/(?=.*[\p{Lu}])(^[\p{Lu}0-9 ,'!%^*@#$(]+\?$)/u, input) ->
        "Calm down, I know what I'm doing!"

      input |> String.trim() |> String.ends_with?("?") ->
        "Sure."

      true ->
        "Whatever."
    end
  end
end
