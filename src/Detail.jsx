import React, { useState } from 'react';
import { Tree, TreeItem, Upload, Button } from '@ui5/webcomponents-react';
import { FileUploader, Avatar, FlexBox, Badge, FlexBoxAlignItems } from '@ui5/webcomponents-react';

export function Detail(){

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.detail.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    // Replace with your actual upload endpoint
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the upload result, e.g. display a success message
        console.log(result);
      })
      .catch((error) => {
        // Handle the upload error, e.g. display an error message
        console.error(error);
      });
  };

  return (
    <div>
    <Tree>
  <TreeItem
    additionalText="Additional Text"
    expanded
    hasChildren
    icon={{
      wrenchIcon: 'wrench'
    }}
    mode="None"
    onItemClick={function Ma(){}}
    onItemDelete={function Ma(){}}
    onItemMouseout={function Ma(){}}
    onItemMouseover={function Ma(){}}
    onItemToggle={function Ma(){}}
    onSelectionChange={function Ma(){}}
    text="Customizable TreeItem"
  >
    <TreeItem
      expanded
      selected
      text="Tree 1.1"
    >
      <TreeItem text="Tree 1.1.1" />
      <TreeItem text="Tree 1.1.2" />
    </TreeItem>
  </TreeItem>
</Tree>

<FlexBox 
alignItems={FlexBoxAlignItems.Center}
>
  <FileUploader hideInput accept='.json' onChange={handleFileSelect}>
    <Avatar>
      <img src="uploadIcon.png"/>
    </Avatar>
  </FileUploader>
  <Button hideInput onClick={handleUpload} >
    {"Upload file"}
  </Button>
  </FlexBox>
  </div>
  );
};

