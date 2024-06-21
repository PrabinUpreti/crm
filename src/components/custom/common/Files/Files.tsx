/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-icons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-layouts/styles/material.css";
import "@syncfusion/ej2-grids/styles/material.css";
import "@syncfusion/ej2-react-filemanager/styles/material.css";

import {
  DetailsView,
  FileManagerComponent,
  NavigationPane,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-filemanager";

function Files(
  this: import("@storybook/types").ComponentAnnotations<
    import("@storybook/react").ReactRenderer,
    unknown
  >,
) {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onCreated(args: any) {
    console.log("File Manager has been created successfully");
  }
  return (
    <div className="control-section  overflow-auto">
      <FileManagerComponent
        id="file"
        view="LargeIcons"
        ajaxSettings={{
          downloadUrl: hostUrl + "api/FileManager/Download",
          getImageUrl: hostUrl + "api/FileManager/GetImage",
          uploadUrl: hostUrl + "api/FileManager/Upload",
          url: hostUrl + "api/FileManager/FileOperations",
        }}
        created={onCreated.bind(this)}
      >
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default Files;
