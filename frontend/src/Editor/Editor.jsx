import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function Editor({ value, setValue }) {
    return (
        <div className='w-3/4 h-auto my-4 '>
            <CKEditor
                editor={ClassicEditor}
                data={value}

                onChange={(event, editor) => {
                    const data = editor.getData();
                    setValue(data)
                }}
            />
        </div>
    )
}
