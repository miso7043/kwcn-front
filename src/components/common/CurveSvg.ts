/**
 * Snake Path Builder - SVG 뱀 모양 경로 생성기
 * 
 * 분석된 규칙:
 * - Y 좌표가 단계별로 약 214.67씩 증가
 * - 좌우로 구불구불한 뱀 패턴
 * - 각 단계는 이전 모든 단계를 포함하는 누적 구조
 */

interface Point {
    x: number;
    y: number;
}

interface SnakeSegment {
    start: Point;
    control1: Point;
    control2: Point;
    end: Point;
}

const _svgWidth = 250;

// 꺽이는 지점마다 꼬이는 패스
export function buildSnakePath(steps: number): string {
    if (steps < 1) return '';

    // 기본 설정값들
    const baseY = 19;           // 시작 Y 좌표
    const yIncrement = 214.67;  // Y 증가량 (약 215)
    const leftX = 5;            // 왼쪽 X 좌표
    const rightX = 376;         // 오른쪽 X 좌표
    const controlOffset = 70;   // 제어점 오프셋

    // 각 단계별 세그먼트 생성
    const segments: SnakeSegment[] = [];

    for (let i = 0; i < steps; i++) {
        const currentY = baseY + (yIncrement * i);
        const nextY = baseY + (yIncrement * (i + 1));

        // 홀수/짝수에 따라 방향 결정 (뱀처럼 좌우로 구불구불)
        const isOdd = i % 2 === 0;

        if (isOdd) {
            // 오른쪽에서 왼쪽으로
            segments.push({
                start: { x: rightX, y: currentY },
                control1: { x: rightX, y: currentY - controlOffset },
                control2: { x: leftX, y: nextY + controlOffset },
                end: { x: leftX, y: nextY }
            });
        } else {
            // 왼쪽에서 오른쪽으로
            segments.push({
                start: { x: leftX, y: currentY },
                control1: { x: leftX, y: currentY - controlOffset },
                control2: { x: rightX, y: nextY + controlOffset },
                end: { x: rightX, y: nextY }
            });
        }
    }

    // SVG Path 문자열 생성
    if (segments.length === 0) return '';

    // 첫 번째 세그먼트의 시작점으로 이동
    const firstSegment = segments[0];
    let pathString = `M${firstSegment.start.x} ${firstSegment.start.y}`;

    // 모든 세그먼트를 베지어 곡선으로 연결
    segments.forEach(segment => {
        pathString += `C${segment.control1.x} ${segment.control1.y} ${segment.control2.x} ${segment.control2.y} ${segment.end.x} ${segment.end.y}`;
    });

    return pathString;
}

// 실제 이미지와 가장 유사한 자연스러운 곡선
export function buildSmoothSnakePath(steps: number): string {
    if (steps < 1) return '';


    const leftX = _svgWidth * 0.1;   // 10% 지점
    const rightX = _svgWidth * 0.9;  // 90% 지점
    const yStep = 180;
    const startY = 100;

    let pathString = `M${rightX} ${startY}`;

    for (let i = 0; i < steps; i++) {
        const currentY = startY + (i * yStep);
        const nextY = startY + ((i + 1) * yStep);
        // const midY = (currentY + nextY) / 2;

        const isGoingLeft = i % 2 === 0;
        const startX = isGoingLeft ? rightX : leftX;
        const endX = isGoingLeft ? leftX : rightX;

        // 더 부드러운 S자 곡선을 위한 제어점
        // const horizontalDistance = Math.abs(endX - startX);
        const verticalDistance = nextY - currentY;

        // 첫 번째 제어점 (시작점 쪽)
        const control1X = startX;
        const control1Y = currentY + verticalDistance * 0.4;

        // 두 번째 제어점 (끝점 쪽)
        const control2X = endX;
        const control2Y = nextY - verticalDistance * 0.4;

        pathString += `C${control1X} ${control1Y} ${control2X} ${control2Y} ${endX} ${nextY}`;
    }

    return pathString;
}

// React 컴포넌트에서 사용할 수 있는 헬퍼 함수
export function getSnakePathInfo(steps: number) {
    const path = buildSmoothSnakePath(steps);
    const width = _svgWidth;
    const height = Math.min(2000, 200 * steps + 100);

    // viewBox 동적 계산
    const viewBox = `0 0 ${width} ${height}`;

    return {
        path,
        viewBox,
        width,
        height,
    };
}