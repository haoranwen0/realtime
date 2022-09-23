import React from "react";

const Upload = () => {
  const [media, setMedia] = React.useState(null);

  const getFileBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const onVideoUpload = (e) => {
    // setMedia(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files[0]) {
      getFileBase64(e.target.files[0], (result) => {
        setMedia(result);
      });
    }
  };

  return (
    <div className="flex flex-col items-center h-full bg-gray-200 p-4">
      <input
        type="file"
        accept="video/*"
        onChange={onVideoUpload}
        onClick={() => setMedia(null)}
        className="mb-4"
      />
      {media && (
        <>
          <video autoPlay muted controls className="rounded-md w-[175px]">
            <source src={media} type="video/mp4" />
          </video>
          <span>{media}</span>
        </>
      )}
    </div>
  );
};

export default Upload;
