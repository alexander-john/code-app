import { useParams } from 'react-router-dom';
import { technologies } from '../data/technologies';
import TrueOrFalsePage from './TrueOrFalsePage';
import MultipleChoicePage from './MultipleChoicePage';
import CodeChallengeLayout from './CodeChallengeLayout';

function FeatureLayoutPage() {
  const { languageSlug, bookSlug, chapterSlug, featureSlug } = useParams();
  const feature =
    technologies?.[languageSlug]?.books?.[bookSlug]?.chapters?.[chapterSlug]?.features?.[featureSlug];

  if (!feature) return <div>Feature not found.</div>;

  if (feature.component === 'QuizLayout') {
    return <TrueOrFalsePage feature={feature} />;
  }
  if (feature.component === 'MultipleChoiceLayout') {
    return <MultipleChoicePage feature={feature} />;
  }
  if (feature.component === 'CodeChallengeLayout') {
    return <CodeChallengeLayout feature={feature} />;
  }
  return <div>Feature type not supported.</div>;
}

export default FeatureLayoutPage;