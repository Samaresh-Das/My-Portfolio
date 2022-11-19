import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionText,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, image, description, tags, live, code }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent></TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={code} target="_blank">
              Code
            </ExternalLinks>
            {live && (
              <ExternalLinks href={live} target="_blank">
                Live
              </ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionText>
      I have many projects, these are only the best ones. To see all of them
      click{" "}
      <a
        href="https://sam-all-projects.netlify.app"
        target="_blank"
        style={{ color: "white" }}
      >
        here
      </a>
    </SectionText>
  </Section>
);

export default Projects;
