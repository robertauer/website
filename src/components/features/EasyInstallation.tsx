import React, { FC } from "react";
import {
  Linux,
  Redhat,
  Debian,
  Windows,
  Apple,
  Docker,
  Kubernetes,
  Helm,
} from "@icons-pack/react-simple-icons";
import IconGroup from "../IconGroup";
import Feature, { FeatureProps } from "./Feature";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

const EasyInstallation: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Easy Installation">
      SCM-Manager can be installed on the platform where you want it. We are
      trying to make the installation on every platform as easy as possible.
    </TextColumn>
    <ImageColumn>
      <IconGroup>
        <Linux />
        <Redhat />
        <Debian />
        <Windows />
        <Apple />
      </IconGroup>
      <IconGroup>
        <Docker />
        <Kubernetes />
        <Helm />
      </IconGroup>
    </ImageColumn>
  </Feature>
);

export default EasyInstallation;