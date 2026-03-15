import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";
import { getSectionThreshold } from "@/lib/constants";

export function useSectionInView(sectionName: SectionName) {
    const threshold = getSectionThreshold(sectionName);
    const { ref, inView } = useInView({
        threshold: threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return { ref };
}