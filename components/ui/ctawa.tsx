import Image from "next/image"

const CtaWa = () => {
    return (
        <div className="fixed right-0 bottom-8">
            <a href="https://wa.me/6281514165875">
                <Image src={"/images/wa.png"} alt="Whatsapp PT AGC" height={600} width={1600}  className="animate-bounce w-12"/>
            </a>
        </div>
    )
}

export default CtaWa