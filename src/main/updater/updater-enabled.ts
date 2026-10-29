import { app } from 'electron'

// Why: this fork's builds must not be replaced by upstream releases. Opt back in with ORCA_ENABLE_UPDATER=1.
export function isUpdaterEnabled(): boolean {
  return app.isPackaged && process.env.ORCA_ENABLE_UPDATER === '1'
}
