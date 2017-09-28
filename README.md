# Phxvue

## Very rudimentary example of getting Phoenix & Vue up and running

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Either configure environment variables for your database or modify username and password in `config/dev.exs` near the bottom
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Modify or run `mix run priv/repo/seeds.exs` to seed database with some sample posts using the `Faker` package
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Vue official website: https://vuejs.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

## Notes about this example

Look at `assets/js/components/posts/posts.js` for the Vue code.
Look at `lib/phxvue_web/templates/page/index.html.eex` for the html file where the Vue code hooks into
Look at `lib/phxvue_web/controllers/post_controller.ex` for the controller code
Look at `lib/phxvue/blog/` for the models scoped under the `blog` context, read more about Phoenix 1.3 contexts here: https://hexdocs.pm/phoenix/contexts.html