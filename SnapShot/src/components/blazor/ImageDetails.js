import { useBlazor } from './blazor-react';

export function ImageDetails({
  title,
  url,
  id,
  customCallback,
}) {
  const fragment = useBlazor('image-details', {
    title,
    url,
    id,
    customCallback,
  });

  return fragment;
}
