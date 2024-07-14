export default function parseBinary(event: ProgressEvent<FileReader>) {
  console.log(event.target?.result);
}
