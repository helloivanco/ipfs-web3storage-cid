import { packToBlob } from 'ipfs-car/pack/blob';

export const getCID = async (buffer: Buffer): Promise<string> => {
  const { root } = await packToBlob({
    input: [buffer],
    wrapWithDirectory: false,
    maxChunkSize: 1048576,
    maxChildrenPerNode: 1024,
  });
  return root.toString();
};
