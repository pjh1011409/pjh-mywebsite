import { useMemo, useRef } from 'react'
import './textEditor.css'
import 'react-quill/dist/quill.snow.css'
import ReactQuill, { Quill } from 'react-quill'
import ImageResize from 'quill-image-resize'
Quill.register('modules/ImageResize', ImageResize)

const TextEditor = (props) => {

    const quillRef = useRef(); // 에디터 접근을 위한 ref return
//     // 이미지 처리를 하는 핸들러
// const imageHandler = () => {
//     console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!');
  
//     // 1. 이미지를 저장할 input type=file DOM을 만든다.
//     const input = document.createElement('input');
//     // 속성 써주기
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click(); 
   
//     input.addEventListener('change', async () => {
//       console.log('온체인지');
//       const file = input.files[0];
//       const formData = new FormData();
//       formData.append('img', file); 
//       try {
//         const result = await axios.post('http://222.235.9.74:8000/api/notes/', formData);
//         console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
//         const IMG_URL = result.data.url;
//         const editor = quillRef.current.getEditor(); 
//         const range = editor.getSelection();
//         editor.insertEmbed(range.index, 'image', IMG_URL);
//       } catch (error) {
//         console.log('실패했어요ㅠ');
//       }
//     });
//   };
    const modules = useMemo(()=>{
        return{
            toolbar: {
                //[{ 'font': [] }],
                container: [ [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                ],
                ['link', 'image'],
                [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
                ['clean'],],
                // handlers: {
                //     // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
                //     image: imageHandler,
                //   },
                },
    
            ImageResize: {
                parchment: Quill.import('parchment'),
            },
         
        }
    },[]);

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
    }

    return (
        <div style={{ height: 'auto'}}>
            <ReactQuill
                ref = {quillRef}
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
