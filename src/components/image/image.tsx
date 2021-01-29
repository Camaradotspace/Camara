import * as React from 'react';
import styled from 'styled-components';

interface StyleProps {
  width?: number;
}

interface ImageProps {
  imageURL?: string;
}

export const StyledImage = styled.img<StyleProps>`
  width: ${(props) => props.width}%;
  display: block;
  object-fit: cover;
`;

export const Image: React.FC<StyleProps & ImageProps> = ({
  width = 100,
  imageURL,
}) => {
  return <StyledImage src={imageURL} width={width} />;
};

Image.defaultProps = {};

Image.displayName = 'ImageComponent';