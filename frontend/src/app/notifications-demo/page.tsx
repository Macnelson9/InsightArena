"use client";

import NotificationsCard from "@/component/NotificationsCard";

export default function NotificationsDemoPage() {
  return (
    <div className="min-h-screen bg-[#141824] p-8 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <NotificationsCard />
      </div>
    </div>
  );
}