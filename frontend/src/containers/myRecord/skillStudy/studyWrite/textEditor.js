import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor'
import './textEditor.css'
// import Image from '@ckeditor/ckeditor5-image/src/image'
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
// import  Paragraph  from '@ckeditor/ckeditor5-paragraph/src/paragraph'
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'

function CkEditor(props) {

    const editorConfiguration = {
        // plugins: [Paragraph, Bold, Italic, Essentials],
        // toolbar: ["bold", "italic"],
      };
      
    const onChange = (event, editor) => {
        props.setContent(editor.getData());
        console.log(props.Content)
      
    }

  
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                config={
                        editorConfiguration
                        // extraPlugin: [props.imageHandler],
                    // placeholder: '글을 작성해주세요',
                    // // extraPlugins: [props.uploadPlugin]
                }
                data= {props.Content}
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor)
                }}
                onChange={onChange}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor)
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor)
                }}
            />
        </>
    )
}

export default CkEditor
