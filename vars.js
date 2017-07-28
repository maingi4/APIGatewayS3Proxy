module.exports.setup = () => {
  var s3FileStorageService = '';
  var stage = process.env.env;
  if (stage == "prod")
    s3FileStorageService = '';
  else
    s3FileStorageService = stage + '-';
  
  process.env.bucketNamePrefix = s3FileStorageService;
  process.env.apiGatewayPrefix = s3FileStorageService;

  process.env.apiGatewayDeploymentSuffix = (new Date).getTime();

  return s3FileStorageService;
};
