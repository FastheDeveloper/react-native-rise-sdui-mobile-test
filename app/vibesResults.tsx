import { modelSource } from "@/src/modelSource";
import { useRiseActions } from "@/src/riseActions";
import { components } from "@/src/riseComponents";
import { Rise } from "@rise-tools/react";
import { useLocalSearchParams } from "expo-router";

export default function VibeResult() {
	const pathSegments = useLocalSearchParams<{ slug: string[] }>().slug || [];
	console.log(pathSegments);
	const path = pathSegments.join("/");

	return (
		<Rise
			modelSource={modelSource}
			components={components}
			path={"vibesResults"}
			actions={useRiseActions()}
		/>
	);
}
