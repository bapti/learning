expression ->
  N MS N MS N  {% d => d.join('') %}

MS ->
    "+" {% d => d[0] %}
  | "-" {% d => d[0] %}

N ->
  [0-9]:+ {% d => d[0].join('') %}
