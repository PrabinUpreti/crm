import { useRef } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { Resend } from "resend";

const resend = new Resend("re_5qiKmTtg_99ie1bZ4dG35XsLnRPztbvzz");

const EmailTemplatePage = () => {
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };

  return (
    <div className="h-full">
      <EmailEditor ref={emailEditorRef} onReady={onReady} />
      <div>
        <button
          className="bg-blue-800 text-white py-2 px-5 flex"
          onClick={exportHtml}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};
export default EmailTemplatePage;
