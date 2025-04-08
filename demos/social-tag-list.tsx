import { SocialTagItem, SocialTagList } from "@/components/ui/social-tag-list";

export default function SocialTagListDemo() {
    const tags = [
      { label: "Facebook", id: "@solarisui", link: "#" },
      { label: "Twitter", id: "@solarisui", link: "#" },
      { label: "Instagram", id: "@solarisui", link: "#" },
      { label: "LinkedIn", id: "@solarisui", link: "#" },
    ];
  
    return (
      <div className="w-full flex flex-col justify-center items-center p-8 space-y-8">
        {/* SocialTagList Example */}
          <SocialTagList className="max-w-full"> 
            {tags.map((tag, index) => (
              <SocialTagItem
                key={index}
                label={tag.label}
                id={tag.id}
                link={tag.link}
                className="mx-auto"
              />
            ))}
          </SocialTagList>
      </div>
    );
  }
