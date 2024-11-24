import MailForm from "@/components/mail-form/mail-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="max-w-[800px] w-full mx-auto mt-12">
      <h2 className="font-semibold text-2xl text-center mb-4">お問い合わせフォーム</h2>
      <MailForm />
    </main>
  );
}
