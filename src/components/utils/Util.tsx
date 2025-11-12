import type { ReactNode } from "react";

// 문자열의 \n을 <br />로 변환하는 함수
export function renderWithLineBreaks(text: string): ReactNode {
  return text.split('\n').map((line, idx) =>
    idx === 0 ? line : [<br key={idx} />, line]
  );
}


// **문자열** 패턴을 <strong>문자열</strong>로 변환하는 함수
export  function highlightStrong(text: string): string {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

// 문자열 앞에 붙은 숫자와 점, 공백을 제거하는 함수
export function removeLeadingNumbers(text: string): string {
    return text.replace(/^\d+\.?\s*/, '');
}