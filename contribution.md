# Contribution Guidelines
This file guides you on how to start contributing code to this repo, before contribution you'd like to setup this repo. Here are the steps to setup Personal Cloud Desktop Client on your local device.

## Building on Local Environment
This app is built on Tauri, a rust based framework for desktop app, to start building on your local machine follow instructions specific to Tauri app and your OS here [here](https://v1.tauri.app/v1/guides/getting-started/prerequisites/).

## Supabase Setup
To setup and build client app successfully you have to setup Supabase , create a project in supabase clicking [here](https://database.new) 

### Enter .env
Copy details from your supabase project and replace them in `.env.example` inside `./src-tauri/app`
```env
SUPABASE_URL="<Your Supabase URL>"
SUPABASE_KEY="<Your Supabase Key>"
BUILDFOR="Linux"// Change if on Windows
```
**Note**: If you're building on Windows change ```BUILDFOR``` varible in your build environment or remove the env this is related to https://github.com/tauri-apps/tauri/issues/2604
and https://github.com/tauri-apps/wry/issues/444

### Install Packages and Dependencies
- Run ``` npm install ``` in `./src-tauri/app`
- Run ``` cargo build ``` in `./src-tauri`
- And finally run ``` bun install ``` in the `./` directory of the project
- If there are no errors till now you've successfully installed all the dependencies, and you can move to next step. If you're facing issue [open a discussion](https://github.com/doshareme/desktop/discussions) with your log.

### Running Dev Client
 Finally you can run `bun tauri dev` to run Personal Cloud Desktop Client App on your local machine, read [server documentation](https://github.com/doshareme/server), before proceeding.

 ## Contributing
 Before working on a feature it would be nice, if you could inform other contributors by commenting in an issue so that duplicated effort is prevented.
 
 To start contributing setup your fork on GitHub and set that repo as via `git remote <url-of-fork>` and push your updates their.
 Make sure all the conflicts are resolved, before sending a PR, that improves the chances of merging.
 
 Currently there are no tests for the PRs, you can send it in and maintainer's will take a look, just ensure that issue you're working on is tagged in PR via issue id e.g. #1.
 
 ## Feedback and Improvement
 If you have any feedbacks or improvements for this readme and project [open up an issue](https://github.com/doshareme/desktop/issues/new?labels=documentation)
