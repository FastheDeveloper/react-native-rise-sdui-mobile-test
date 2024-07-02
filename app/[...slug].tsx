import { modelSource } from '@/src/modelSource';
import { components } from '@/src/riseComponents';
import { useExpoRouterActions } from '@rise-tools/kit-expo-router';
import {
  useHapticsActions,
  useLinkingActions,
  useToastActions,
} from '@rise-tools/kitchen-sink';
import { Rise } from '@rise-tools/react';
import { useLocalSearchParams } from 'expo-router';

export default function Dynamic() {
  const [pathSlug, ...segments] =
    useLocalSearchParams<{ slug: string[] }>().slug || [];
  const path = segments.join('/');

  console.log('Dynamic', { pathSlug, segments, path });
  return (
    <Rise
      modelSource={modelSource}
      components={components}
      path={pathSlug}
      actions={{
        ...useHapticsActions(),
        ...useLinkingActions(),
        ...useToastActions(),
        ...useExpoRouterActions({}),
      }}
    />
  );
}