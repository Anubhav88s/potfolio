'use client'

const WatermarkBlocker = () => {
    return (
        <div
            className="fixed bottom-0 right-0 z-[2] w-[159px] h-[75px] bg-black pointer-events-none rounded-tl-2xl border-l border-t border-black"
            aria-hidden="true"
        >
        </div>
    )
}

export default WatermarkBlocker
