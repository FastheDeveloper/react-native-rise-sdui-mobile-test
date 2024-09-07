import { modelSource } from "@/src/modelSource";
import { useRiseActions } from "@/src/riseActions";
import { components } from "@/src/riseComponents";
import { Rise } from "@rise-tools/react";
import { useLocalSearchParams } from "expo-router";

export default function Vibe() {
	const pathSegments = useLocalSearchParams<{ slug: string[] }>().slug || [];
	console.log(pathSegments);
	const path = pathSegments.join("/");

	return (
		<Rise
			modelSource={modelSource}
			components={components}
			path={"vibes"}
			actions={useRiseActions()}
		/>
	);
}
