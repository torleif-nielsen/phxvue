defmodule PhxvueWeb.PageController do
  use PhxvueWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
