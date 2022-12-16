import AWS from "aws-sdk";

const S3_BUCKET = `${process.env.REACT_APP_NEWDOGGO_S3BUCKET}`;
const REGION = `${process.env.REACT_APP_AWS_REGION}`;
const ACCESS_KEY = `${process.env.REACT_APP_AWS_ACCESS_KEY}`;
const SECRET_KEY = `${process.env.REACT_APP_AWS_SECRET_KEY}`;

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

export const UploadImageToS3 = async (file) => {
  if (!file) {
    return { error: "Please select a file!" };
  }
  const params = {
    ACL: "public-read",
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
  };

  let res = await myBucket.putObject(params).promise();
  if (res.error) {
    return res;
  }
  return `https://${S3_BUCKET}.s3.amazonaws.com/${file.name}`;
};
