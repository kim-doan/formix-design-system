import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../../components/Modal";
import { SolidButton } from "../../components/SolidButton";

const meta = {
  title: "Components/Modal/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    closeOnBackdropClick: {
      control: "boolean",
    },
    closeOnEscape: {
      control: "boolean",
    },
    onClose: { action: "closed" },
  },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <SolidButton onClick={() => setIsOpen(true)}>팝업 열기</SolidButton>

        <Popup
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            args.onClose?.();
          }}
        >
          <div style={{ padding: "24px", minWidth: "300px" }}>
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              기본 팝업
            </h2>
            <p
              style={{ margin: "0 0 20px 0", color: "#666", lineHeight: "1.5" }}
            >
              이것은 기본 팝업입니다. ESC 키를 누르거나 배경을 클릭하면
              닫힙니다.
            </p>
            <SolidButton onClick={() => setIsOpen(false)}>닫기</SolidButton>
          </div>
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    closeOnBackdropClick: true,
    closeOnEscape: true,
    children: <div>Default content</div>,
  },
};

export const SmallContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <SolidButton onClick={() => setIsOpen(true)}>
          작은 팝업 열기
        </SolidButton>

        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ padding: "20px" }}>
            <p style={{ margin: 0 }}>작은 내용</p>
          </div>
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    children: <div>Small content</div>,
  },
};

export const LargeContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <SolidButton onClick={() => setIsOpen(true)}>큰 팝업 열기</SolidButton>

        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ padding: "32px", maxWidth: "600px" }}>
            <h1
              style={{
                margin: "0 0 24px 0",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              큰 팝업 제목
            </h1>
            <div style={{ marginBottom: "24px" }}>
              <p style={{ margin: "0 0 16px 0", lineHeight: "1.6" }}>
                이것은 더 많은 내용을 담은 큰 팝업입니다. 여러 단락의 텍스트와
                다양한 요소들을 포함할 수 있습니다.
              </p>
              <p style={{ margin: "0 0 16px 0", lineHeight: "1.6" }}>
                팝업은 화면 크기에 따라 최대 90vw, 90vh로 제한되므로 반응형으로
                동작합니다.
              </p>
              <ul style={{ margin: "0 0 16px 0", paddingLeft: "20px" }}>
                <li>첫 번째 항목</li>
                <li>두 번째 항목</li>
                <li>세 번째 항목</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "flex-end",
              }}
            >
              <SolidButton variant="assistive" onClick={() => setIsOpen(false)}>
                취소
              </SolidButton>
              <SolidButton onClick={() => setIsOpen(false)}>확인</SolidButton>
            </div>
          </div>
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    children: <div>Large content</div>,
  },
};

export const ScrollableContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <SolidButton onClick={() => setIsOpen(true)}>
          스크롤 가능한 팝업 열기
        </SolidButton>

        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ padding: "24px", width: "400px", maxHeight: "500px" }}>
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              스크롤 가능한 내용
            </h2>
            <div
              style={{
                marginBottom: "20px",
                overflowY: "auto",
                maxHeight: "300px",
              }}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i} style={{ margin: "0 0 12px 0", lineHeight: "1.5" }}>
                  {i + 1}. 이것은 스크롤 가능한 긴 내용입니다. 내용이 팝업의
                  최대 높이를 초과하면 스크롤이 생깁니다.
                </p>
              ))}
            </div>
            <SolidButton onClick={() => setIsOpen(false)}>닫기</SolidButton>
          </div>
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    children: <div>Scrollable content</div>,
  },
};

export const NoBackdropClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <SolidButton onClick={() => setIsOpen(true)}>
          배경 클릭 닫기 비활성화
        </SolidButton>

        <Popup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          closeOnBackdropClick={false}
        >
          <div style={{ padding: "24px", minWidth: "300px" }}>
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              배경 클릭 비활성화
            </h2>
            <p
              style={{ margin: "0 0 20px 0", color: "#666", lineHeight: "1.5" }}
            >
              배경을 클릭해도 닫히지 않습니다. ESC 키나 닫기 버튼을 사용해야
              합니다.
            </p>
            <SolidButton onClick={() => setIsOpen(false)}>닫기</SolidButton>
          </div>
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    closeOnBackdropClick: false,
    children: <div>No backdrop close</div>,
  },
};

export const NoEscapeClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <SolidButton onClick={() => setIsOpen(true)}>
          ESC 키 닫기 비활성화
        </SolidButton>

        <Popup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          closeOnEscape={false}
        >
          <div style={{ padding: "24px", minWidth: "300px" }}>
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              ESC 키 비활성화
            </h2>
            <p
              style={{ margin: "0 0 20px 0", color: "#666", lineHeight: "1.5" }}
            >
              ESC 키를 눌러도 닫히지 않습니다. 배경 클릭이나 닫기 버튼을
              사용해야 합니다.
            </p>
            <SolidButton onClick={() => setIsOpen(false)}>닫기</SolidButton>
          </div>
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    closeOnEscape: false,
    children: <div>No escape close</div>,
  },
};

export const MultiplePopups: Story = {
  render: () => {
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

    return (
      <div>
        <SolidButton onClick={() => setFirstOpen(true)}>
          첫 번째 팝업 열기
        </SolidButton>

        <Popup isOpen={firstOpen} onClose={() => setFirstOpen(false)}>
          <div style={{ padding: "24px", minWidth: "300px" }}>
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              첫 번째 팝업
            </h2>
            <p
              style={{ margin: "0 0 20px 0", color: "#666", lineHeight: "1.5" }}
            >
              이 팝업에서 또 다른 팝업을 열 수 있습니다.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <SolidButton onClick={() => setSecondOpen(true)}>
                두 번째 팝업 열기
              </SolidButton>
              <SolidButton
                variant="assistive"
                onClick={() => setFirstOpen(false)}
              >
                닫기
              </SolidButton>
            </div>
          </div>
        </Popup>

        <Popup isOpen={secondOpen} onClose={() => setSecondOpen(false)}>
          <div style={{ padding: "24px", minWidth: "250px" }}>
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              두 번째 팝업
            </h2>
            <p
              style={{ margin: "0 0 20px 0", color: "#666", lineHeight: "1.5" }}
            >
              중첩된 팝업입니다.
            </p>
            <SolidButton onClick={() => setSecondOpen(false)}>닫기</SolidButton>
          </div>
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    children: <div>Multiple popups</div>,
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [closeOnBackdrop, setCloseOnBackdrop] = useState(true);
    const [closeOnEscape, setCloseOnEscape] = useState(true);
    const [content, setContent] = useState("기본");

    const getContent = () => {
      switch (content) {
        case "작은":
          return (
            <div style={{ padding: "16px" }}>
              <p style={{ margin: 0 }}>작은 내용</p>
            </div>
          );
        case "큰":
          return (
            <div style={{ padding: "32px", width: "500px" }}>
              <h1 style={{ margin: "0 0 16px 0" }}>큰 내용</h1>
              <p style={{ margin: "0 0 16px 0" }}>
                이것은 더 많은 내용을 포함한 큰 팝업입니다.
              </p>
              {Array.from({ length: 5 }, (_, i) => (
                <p key={i} style={{ margin: "0 0 12px 0" }}>
                  단락 {i + 1}: 추가적인 내용입니다.
                </p>
              ))}
            </div>
          );
        default:
          return (
            <div style={{ padding: "24px", minWidth: "300px" }}>
              <h2 style={{ margin: "0 0 16px 0" }}>기본 팝업</h2>
              <p style={{ margin: "0 0 20px 0" }}>
                설정을 변경하여 다양한 동작을 테스트해보세요.
              </p>
              <SolidButton onClick={() => setIsOpen(false)}>닫기</SolidButton>
            </div>
          );
      }
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={closeOnBackdrop}
              onChange={(e) => setCloseOnBackdrop(e.target.checked)}
            />
            배경 클릭으로 닫기
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={closeOnEscape}
              onChange={(e) => setCloseOnEscape(e.target.checked)}
            />
            ESC 키로 닫기
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            내용 크기:
            <select
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ padding: "4px 8px" }}
            >
              <option value="기본">기본</option>
              <option value="작은">작은</option>
              <option value="큰">큰</option>
            </select>
          </label>
        </div>

        <SolidButton onClick={() => setIsOpen(true)}>팝업 열기</SolidButton>

        <Popup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          closeOnBackdropClick={closeOnBackdrop}
          closeOnEscape={closeOnEscape}
        >
          {getContent()}
        </Popup>
      </div>
    );
  },
  args: {
    isOpen: false,
    children: <div>Interactive content</div>,
  },
};
