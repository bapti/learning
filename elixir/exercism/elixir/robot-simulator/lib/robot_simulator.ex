defmodule RobotSimulator do
  @doc """
  Create a Robot Simulator given an initial direction and position.

  Valid directions are: `:north`, `:east`, `:south`, `:west`
  """
  def create(direction \\ :north, position \\ {0, 0})

  @spec create(direction :: atom, position :: {integer, integer}) :: any
  def create(direction, _)
      when direction not in [:north, :south, :east, :west],
      do: {:error, "invalid direction"}

  def create(direction, {x, y})
      when is_integer(x) and is_integer(y) do
    {direction, {x, y}}
  end

  def create(_, _position), do: {:error, "invalid position"}

  @doc """
  Simulate the robot's movement given a string of instructions.

  Valid instructions are: "R" (turn right), "L", (turn left), and "A" (advance)
  """
  @spec simulate(robot :: any, instructions :: String.t()) :: any
  def simulate(robot, []), do: robot

  def simulate(robot, instructions) when not is_list(instructions) do
    cond do
      String.match?(instructions, ~r/[^LRA]/) ->
        {:error, "invalid instruction"}

      true ->
        simulate(robot, String.graphemes(instructions))
    end
  end

  def simulate({direction, pos}, ["L" | tail]) do
    case direction do
      :north -> simulate({:west, pos}, tail)
      :east -> simulate({:north, pos}, tail)
      :south -> simulate({:east, pos}, tail)
      :west -> simulate({:south, pos}, tail)
    end
  end

  def simulate({direction, pos}, ["R" | tail]) do
    case direction do
      :north -> simulate({:east, pos}, tail)
      :east -> simulate({:south, pos}, tail)
      :south -> simulate({:west, pos}, tail)
      :west -> simulate({:north, pos}, tail)
    end
  end

  def simulate({direction, {x, y}}, ["A" | tail]) do
    case direction do
      :north -> simulate({:north, {x, y + 1}}, tail)
      :east -> simulate({:east, {x + 1, y}}, tail)
      :south -> simulate({:south, {x, y - 1}}, tail)
      :west -> simulate({:west, {x - 1, y}}, tail)
    end
  end

  @doc """
  Return the robot's direction.

  Valid directions are: `:north`, `:east`, `:south`, `:west`
  """
  @spec direction(robot :: any) :: atom
  def direction({direction, _}), do: direction

  @doc """
  Return the robot's position.
  """
  @spec position(robot :: any) :: {integer, integer}
  def position({_, position}), do: position
end
