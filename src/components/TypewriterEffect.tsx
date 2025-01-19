"use client";
import { useState, useEffect } from "react";

interface TypewriterEffectProps {
	strings: string[];
	typingSpeed?: number;
	deletingSpeed?: number;
	delayBetweenStrings?: number;
}

const TypewriterEffect = ({
	strings = [], // Provide default empty array
	typingSpeed = 100,
	deletingSpeed = 50,
	delayBetweenStrings = 1000,
}: TypewriterEffectProps) => {
	// Guard against empty strings array
	if (!strings || strings.length === 0) {
		return <span></span>;
	}

	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		// Ensure we have valid strings to work with
		if (!strings || strings.length === 0 || currentIndex >= strings.length) {
			return;
		}

		const currentString = strings[currentIndex];

		// Guard against invalid current string
		if (typeof currentString !== "string") {
			return;
		}

		let timeout: NodeJS.Timeout;

		if (isTyping) {
			if (currentText === currentString) {
				// Finished typing current string, wait before starting to delete
				timeout = setTimeout(() => {
					setIsTyping(false);
				}, delayBetweenStrings);
			} else {
				// Add next character
				timeout = setTimeout(() => {
					setCurrentText(currentString.slice(0, currentText.length + 1));
				}, typingSpeed);
			}
		} else {
			if (currentText === "") {
				// Finished deleting, move to next string
				setIsTyping(true);
				setCurrentIndex((prev) => (prev + 1) % strings.length);
			} else {
				// Remove last character
				timeout = setTimeout(() => {
					setCurrentText(currentText.slice(0, -1));
				}, deletingSpeed);
			}
		}

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [
		currentText,
		currentIndex,
		isTyping,
		strings,
		typingSpeed,
		deletingSpeed,
		delayBetweenStrings,
	]);

	return (
		<span style={{ borderRight: "0.08em solid #fff" }}>{"" + currentText}</span>
	);
};

export default TypewriterEffect;
