const { AttachmentBuilder } = require("discord.js");

export async function getColonyAvatarFile(IPFSmetaDatahash: string) {
  let base64Default = `iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC10lEQVR4AcVXxZLbQBDV2Sd/hUtn/4yX0RBmuIWPiW5hZmZmZjjtKcy4ZCZJnX7KaGFKI3PlVXV5PE1vuKVVi7ZYMhiJJrsiseSOtmjyBbeHuc+MsKDN8oplB/+HTVBrDpA4pXOiXZw0x22qUmC7C751J+ZRBDipwb8lBK1PHF+DJVDrqENt0dQQgjRDeBBDLKHqkkdT4Tasr3BuIgnEDFceeazJySUSyploizprrp725i5HwIuAIRu3kIQhn3G9rcrd3jcnRQPz5H70sW5ulQSiyRKT0KeOfpefQ2JRmg6eKNCb9yZZlk1PX5Vo7YYsGZtzjqD9jPuggw1s4VNhFnZpALMJ+l0y0QUpGk9ZVCvGkxZ8/WYhh9wg0OXH9NrtItUJ+FZaii4Q2KEymLM8TeWyTXUCvojhR2AHCLxSGZy9XKAGgRh+++AFCCgvnuERi2T8+mNRNmeTjGzWdnQy/nAMnxkYBgHTS7lkZYZknLlU+Hfk5qfo63eTXKA9yH3QwUYGYikImFqbgsCm3TmSMXvZ5HoeOzOZCG23HzYyNu3KeRJAbuUSnLxQIBnr+Ly7+nuPS+QCbbcfd4KMk+cLvkvwwkt51eP4jYxatOdwni7dKJJt2+QC7cvcBx1sZCCWgsAr5TG8fqdITQJiKY+h8iI6JS1BvmDT3UclyudtUgE62MB2CrCcqmPYpbyKOxMpOnyqMC3Ypy8mLV2VoTXrs850n75YgDjttdy3jHWfv5rTCB06WaCOhGfyHArdio9RYnEaR8u52z98MkUwb4Huw2eTxtgWxOK+D5J4jAQBHU8kFH7BxVn3FdjAtnKxmtT/W0HSJhck4lkOsLS+JEMOr5JMkAihcGwZgaiiKJWWItyKylh8yqnLcnkmmrkciMWiHLmyTGcng39LDSQuic+7gFYfRMUcre3jFLbCR9eaBXFjduH+5t9XLMNOLcGCNssLoetiqfrz/C+xqsDlSf0bLQAAAABJRU5ErkJggg==`;

  if (!IPFSmetaDatahash) return createFileFromBase64(base64Default);

  const colonyMetaDataResponse = await fetch(
    `https://gateway.pinata.cloud/ipfs/${IPFSmetaDatahash}`
  );

  if (colonyMetaDataResponse.status != 200)
    return createFileFromBase64(base64Default);

  const colonyMetaDataText = await colonyMetaDataResponse.text();
  const colonyMetaData: any = JSON.parse(colonyMetaDataText);

  let colonyAvatarHash = colonyMetaData.colonyAvatarHash
    ? colonyMetaData.colonyAvatarHash
    : colonyMetaData.data.colonyAvatarHash;
  if (!colonyAvatarHash) return createFileFromBase64(base64Default);

  const colonyAvatarImageResponse = await fetch(
    `https://gateway.pinata.cloud/ipfs/${colonyAvatarHash}`
  );

  if (colonyAvatarImageResponse.status != 200)
    return createFileFromBase64(base64Default);

  let colonyAvatarImageText: any = await colonyAvatarImageResponse.json();
  let colonyAvatarImage = colonyAvatarImageText.data.value;
  colonyAvatarImage = colonyAvatarImage.split("data:image/png;base64,")[1];

  return createFileFromBase64(colonyAvatarImage);
}

function createFileFromBase64(base64: string) {
  //@ts-ignore
  const buf = new Buffer.from(base64, "base64");
  const file = new AttachmentBuilder(buf);

  file.name = "colony-avatar.png";
  return file;
}
