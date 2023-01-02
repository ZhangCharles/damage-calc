#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use window_vibrancy::*;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            #[cfg(target_os = "macos")]
            {
                window.set_decorations(true).unwrap();
                window.show().unwrap();
                apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                    .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
            }
            

            #[cfg(target_os = "windows")]
            {
                apply_acrylic(&window, Some((0, 0, 0, 0)))
                    .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
                window.show().unwrap();
                window.set_decorations(true).unwrap();
            }
            

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
