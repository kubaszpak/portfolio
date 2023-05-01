import { Label, TextInput, Textarea } from "flowbite-react";
import useIsInViewport from "../utils/useIsInViewport";
import { useEffect } from "react";

interface ContactFormProps {
	contactSectionRef: React.MutableRefObject<HTMLDivElement>;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactSectionRef }) => {
	const isSectionIntersecting = useIsInViewport(contactSectionRef);

	useEffect(() => {
		if (isSectionIntersecting) {
			contactSectionRef.current.classList.add("animationFadeInFromB");
		} else {
			contactSectionRef.current.classList.remove("animationFadeInFromB");
		}
	}, [isSectionIntersecting]);

	return (
		<div className="px-8 py-40 opacity-0" ref={contactSectionRef}>
			<h1 className="mb-8 text-center text-2xl font-semibold">Contact</h1>
			<form
				className="mx-auto flex max-w-3xl flex-col gap-4"
				name="contact"
				method="post"
			>
				<input type="hidden" name="form-name" value="contact" />
				<div>
					<div className="mb-2 block">
						<Label htmlFor="name" value="Name" />
					</div>
					<TextInput id="name" name="name" type="text" required={true} />
				</div>

				<div>
					<div className="mb-2 block">
						<Label htmlFor="email" value="Email" />
					</div>
					<TextInput id="email" type="email" name="email" required={true} />
				</div>

				<div>
					<div className="mb-2 block">
						<Label htmlFor="message" value="Message" />
					</div>
					<Textarea id="message" name="message" required={true} />
				</div>

				<button
					type="submit"
					className="my-5 rounded-lg bg-gradient-to-r from-black via-slate-950 to-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 ring-2 ring-slate-100 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-100"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
