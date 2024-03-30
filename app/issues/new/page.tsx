'use client'
import { TextField, Button } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
        <TextField.Root>
            <TextField.Input placeholder='Title' />
        </TextField.Root>
        <SimpleMDE placeholder='Description' />
        <Button>Submit new Issue</Button>
    </div>
  )
}

export default NewIssue