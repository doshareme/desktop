// Written by vednig
// Copyright DoShare
// 2024-Present, tauri-app/src-tauri/src/main.rs
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
// Input additional notes here
// This file is the main entry point for the Tauri application.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
// use tauri::Manager;


fn main() {
    // Init background color to black
    tauri::Builder::default().plugin(tauri_plugin_context_menu::init())
    .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
// let quit = CustomMenuItem::new("quit".to_string(), "Quit");
// let close = CustomMenuItem::new("close".to_string(), "Close");
// let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
// let menu = Menu::new()
//   .add_native_item(MenuItem::Copy)
//   .add_item(CustomMenuItem::new("hide", "Hide"))
//   .add_submenu(submenu);
//     tauri::Builder::default().menu(menu).on_menu_event(|event| {
//         match event.menu_item_id() {
//           "quit" => {
//             std::process::exit(0);
//           }
//           "close" => {
//             event.window().close().unwrap();
//           }
//           _ => {}
//         }
//       }) 
//         .invoke_handler(tauri::generate_handler![my_custom_command])
//         .run(tauri::generate_context!())
//         .expect("failed to run app");
}

#[tauri::command]
fn my_custom_command() {
    println!("I was invoked from JS!");
    // --snip--
}
