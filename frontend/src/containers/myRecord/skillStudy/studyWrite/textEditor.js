import { useMemo, useRef } from 'react'

import './textEditor.css'
import 'react-quill/dist/quill.snow.css'
import ReactQuill, { Quill } from 'react-quill'
import ImageResize from 'quill-image-resize'
Quill.register('modules/ImageResize', ImageResize)

const TextEditor = (props) => {

    const modules = {
        toolbar: [
            //[{ 'font': [] }],
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
            ['clean'],
        ],

        ImageResize: {
            parchment: Quill.import('parchment'),
        },
        
    }

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'image',
    ]

    const onChange = (editor) => {
        props.setContent(editor)
        console.log(props.Content)
    }

    return (
        <div style={{ height: 'auto'}}>
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={props.Content || ''}
                onChange={(content, delta, source, editor) =>
                    onChange(editor.getHTML())
                }
            />
        </div>
    )
}
export default TextEditor

// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor'
// import './textEditor.css'
// // import Image from '@ckeditor/ckeditor5-image/src/image'
// // import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
// // import  Paragraph  from '@ckeditor/ckeditor5-paragraph/src/paragraph'
// // import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
// // import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'

// function CkEditor(props) {

//     const editorConfiguration = {
//         // plugins: [Paragraph, Bold, Italic, Essentials],
//         // toolbar: ["bold", "italic"],
//       };

//     const onChange = (event, editor) => {
//         props.setContent(editor.getData());

//     }

//     return (
//         <>
//             <CKEditor
//                 editor={ClassicEditor}
//                 config={
//                         editorConfiguration
//                         // extraPlugin: [props.imageHandler],
//                     // placeholder: '글을 작성해주세요',
//                     // // extraPlugins: [props.uploadPlugin]
//                 }
//                 data= {props.Content}
//                 onReady={(editor) => {
//                     // You can store the "editor" and use when it is needed.
//                     // console.log('Editor is ready to use!', editor)
//                 }}
//                 onChange={onChange}
//                 onBlur={(event, editor) => {
//                     console.log('Blur.', editor)
//                 }}
//                 onFocus={(event, editor) => {
//                     console.log('Focus.', editor)
//                 }}
//             />
//         </>
//     )
// }

// export default CkEditor
