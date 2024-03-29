import type { ResumeAccomplishmentsWordings } from '../last-page/accomplishments';
import type { ResumeEducationWordings } from '../last-page/education';
import type { ResumeIntroWordings } from '../front-page/intro';
import type { ResumeMiscWordings } from '../last-page/misc';
import type { ResumePresentationWordings } from '../front-page/presentation';
import type { ResumeExperienceWordings } from '../experience';
import type { LitString } from '../../shared/lit-dev';

export interface ListSectionWording {
  title: LitString;
  content
  : LitString[];
}

export interface ResumeWordings {
  presentation: ResumePresentationWordings;
  intro: ResumeIntroWordings;
  experience: ResumeExperienceWordings;
  education: ResumeEducationWordings;
  accomplishments: ResumeAccomplishmentsWordings;
  misc: ResumeMiscWordings;
}
