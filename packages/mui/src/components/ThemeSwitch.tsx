'use client'
import { type ReactElement } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import { AlignedRight } from './Box/AlignedRight'

export function ThemeSwitch(): ReactElement | undefined {
  const { mode, setMode } = useColorScheme()

  return (
    mode && (
      <AlignedRight>
        <FormControl>
          <InputLabel id="mode-select-label">Theme</InputLabel>
          <Select
            id="mode-select"
            label="Theme"
            labelId="mode-select-label"
            onChange={({ target: { value } }: SelectChangeEvent): void =>
              setMode(value as typeof mode)
            }
            value={mode}
          >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </AlignedRight>
    )
  )
}
