defmodule ProteinTranslation do
  @codon_map %{
    "UGU" => "Cysteine",
    "UGC" => "Cysteine",
    "UUA" => "Leucine",
    "UUG" => "Leucine",
    "AUG" => "Methionine",
    "UUU" => "Phenylalanine",
    "UUC" => "Phenylalanine",
    "UCU" => "Serine",
    "UCC" => "Serine",
    "UCA" => "Serine",
    "UCG" => "Serine",
    "UGG" => "Tryptophan",
    "UAU" => "Tyrosine",
    "UAC" => "Tyrosine",
    "UAA" => "STOP",
    "UAG" => "STOP",
    "UGA" => "STOP"
  }

  @doc """
  Given an RNA string, return a list of proteins specified by codons, in order.
  """
  # @spec of_rna(List.t(), List.t()) :: {atom, list(String.t())}
  def of_rna([], acc), do: {:ok, acc}

  def of_rna([codon | rest], acc) do
    case of_codon(codon) do
      {:ok, "STOP"} -> {:ok, acc}
      {:ok, str} -> of_rna(rest, acc ++ [str])
      {:error, _} -> {:error, "invalid RNA"}
    end
  end

  @spec of_rna(String.t()) :: {atom, list(String.t())}
  def of_rna(rna) do
    of_rna(for(<<x::binary-3 <- rna>>, do: x), [])
  end

  @doc """
  Given a codon, return the corresponding protein

  UGU -> Cysteine
  UGC -> Cysteine
  UUA -> Leucine
  UUG -> Leucine
  AUG -> Methionine
  UUU -> Phenylalanine
  UUC -> Phenylalanine
  UCU -> Serine
  UCC -> Serine
  UCA -> Serine
  UCG -> Serine
  UGG -> Tryptophan
  UAU -> Tyrosine
  UAC -> Tyrosine
  UAA -> STOP
  UAG -> STOP
  UGA -> STOP
  """
  @spec of_codon(String.t()) :: {atom, String.t()}
  def of_codon(codon) do
    cond do
      !Map.has_key?(@codon_map, codon) -> {:error, "invalid codon"}
      true -> {:ok, @codon_map[codon]}
    end
  end
end
